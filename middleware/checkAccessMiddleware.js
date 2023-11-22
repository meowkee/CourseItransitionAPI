export default function () {
    return (req, res, next) => {
        if (req.user.id !== req.params.id) return res.sendStatus(403);
        next();
    };
}