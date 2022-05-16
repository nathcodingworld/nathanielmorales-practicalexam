import jwt from "jsonwebtoken";

export function CreateToken(admin: any) {
  return jwt.sign(
    {
      admin: admin.admin,
      password: admin.password,
    },
    process.env.SECRET,
    { expiresIn: "1h" }
  );
}

export function VerifyToken(authHeader: any) {
  const token = authHeader.split(" ")[1];
  return jwt.verify(token, process.env.SECRET);
}
