export default async function handler(req, res) {
    const filePath = './public/firmware_v1.bin';

    res.setHeader('Content-Disposition', 'attachment; filename="firmware.bin"');
    res.setHeader('Content-Type', 'application/octet-stream');

    // Read file from filesystem
    const fs = require('fs');
    const path = require('path');
    const file = path.resolve(filePath);

    const fileStream = fs.createReadStream(file);
    fileStream.pipe(res);
}
