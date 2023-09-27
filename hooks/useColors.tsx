export function useColors() {
  const colors: string[] = [
    "bg-gradient-to-r from-primary-500 via-green-500 to-blue-500",
    "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500",
    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
    "bg-gradient-to-r from-green-500 via-yellow-500 to-red-500",
    "bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
