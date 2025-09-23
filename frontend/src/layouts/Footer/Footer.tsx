import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 bg-white dark:bg-neutral-900 dark:text-white shadow-sm">
      <div className="container mx-auto px-6 py-4 text-center">
        <p className="text-l text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Suspicious Restro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
