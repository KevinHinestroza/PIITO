import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt.js';

const prisma = new PrismaClient();

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email }, include: { role: true } });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken({ id: user.id, role: user.role.name });
  res.json({ token });
};

export const register = async (req, res) => {
  const { email, password, roleId } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, roleId },
  });
  res.json(user);
};
