const jwt = require("jsonwebtoken");

function createToken(user, jwtSecret) {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    },
    jwtSecret,
    { expiresIn: "7d" }
  );
}

function authenticate(jwtSecret) {
  return (req, res, next) => {
    const header = req.headers.authorization || "";
    const [scheme, token] = header.split(" ");
    if (scheme !== "Bearer" || !token) {
      return res.status(401).json({ error: "Authentication required." });
    }

    try {
      const payload = jwt.verify(token, jwtSecret);
      req.auth = payload;
      return next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid or expired token." });
    }
  };
}

function requireAdmin(req, res, next) {
  if (!req.auth || req.auth.role !== "admin") {
    return res.status(403).json({ error: "Admin access required." });
  }
  return next();
}

module.exports = {
  createToken,
  authenticate,
  requireAdmin
};
