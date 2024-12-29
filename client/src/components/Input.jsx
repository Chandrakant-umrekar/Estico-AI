import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", error = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          className={`
            w-full px-4 py-2.5 rounded-lg
            bg-white text-gray-900
            border border-gray-200
            placeholder-gray-400
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
            hover:border-gray-300
            ${
              error
                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                : ""
            }
            ${className}
          `}
          {...props}
          id={id}
          ref={ref}
        />
        {error && (
          <div className="flex items-center mt-1.5 text-red-500">
            <svg
              className="w-4 h-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default Input;
