export default function handler(req, res) {
    res.status(200).json({
        version: "1.0.0",
        url: "https://your-vercel-project.vercel.app/api/download",
        checksum: "123abc456def" // optional hash
    });
}
