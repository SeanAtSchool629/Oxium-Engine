// api/login.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Simple authentication logic (replace with real logic)
        if (username === 'admin' && password === 'password') {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Login failed' });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
