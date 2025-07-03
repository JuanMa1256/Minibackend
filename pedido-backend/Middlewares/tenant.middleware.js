module.exports = (req, res, next) => {
  const tenantId = req.headers['x-tenant-id'];

  if (!tenantId) {
    return res.status(400).json({ error: 'Falta el header x-tenant-id' });
  }

  req.tenantId = tenantId;
  next();
};

