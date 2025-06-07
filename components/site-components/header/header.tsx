"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Logo from "./logo";
const Header = () => {
const [isScrolled, setIsScrolled] = useState(false);
useEffect(() => {
const handleScroll = () => {
setIsScrolled(window.scrollY > 10);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);
return (
<motion.header
className={cn(
"fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
)}
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.5 }}
>
<div className="container mx-auto flex items-center justify-between">
<Logo />
{/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
<Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
</div>
{/* Mobile Navigation */}
<Sheet>
<SheetTrigger asChild className="md:hidden">
<Button variant="ghost" size="icon">
<Menu className="h-6 w-6" />
<span className="sr-only">Toggle menu</span>
</Button>
</SheetTrigger>
<SheetContent side="right" className="w-[300px] sm:w-[400px]">
<div className="flex flex-col h-full">
<div className="flex justify-end py-4">
<SheetTrigger asChild>
<Button variant="ghost" size="icon">
<X className="h-6 w-6" />
<span className="sr-only">Close menu</span>
</Button>
</SheetTrigger>
</div>
<div className="mt-auto py-6">
<Button className="w-full bg-primary hover:bg-primary/90">
Contact Us
</Button>
</div>
</div>
</SheetContent>
</Sheet>
</div>
</motion.header>
);
};
export default Header;