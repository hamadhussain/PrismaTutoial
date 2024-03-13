// pages/api/middleware.js

export default (req, res, next) => {
    // Log cookies
    console.log('Cookies:', req.headers.cookie);
    next();
  };
  