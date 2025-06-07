import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Logo = () => {
return (
<Link href="/" className="flex items-center">
<motion.div
className="text-2xl font-bold flex items-center"
whileHover={{ scale: 1.05 }}
transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
<span className="text-primary">Bittive</span>
<span className="text-secondary ml-1">Oy</span>
</motion.div>
</Link>
);
};
export default Logo;