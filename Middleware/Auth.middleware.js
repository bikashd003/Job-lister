import jwt from "jsonwebtoken";
const isLoggedIn = (req, res, next) => {
   const { token } = req.headers;
   if (!token) {
      res.status(401).json({ message: "unauthorized" });
   }
   try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
   }
   catch (err) {
      res.status(401).json({ message: "unauthorized" });
   }
}
export default isLoggedIn;