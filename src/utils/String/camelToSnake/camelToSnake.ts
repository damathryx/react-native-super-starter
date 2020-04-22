export default function camelToSnakeCaps(camel: string): string {
  const upperChars = camel.match(/([A-Z])/g);
  if (!upperChars) {
    return camel.toUpperCase();
  }

  let snake = camel;
  for (let i = 0, n = upperChars.length; i < n; i += 1) {
    snake = snake.replace(new RegExp(upperChars[i]), `_${upperChars[i]}`);
  }

  if (snake.slice(0, 1) === '_') {
    snake = snake.slice(1);
  }

  return snake.toUpperCase();
}
