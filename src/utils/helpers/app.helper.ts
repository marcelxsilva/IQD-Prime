const base = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Nulla non ipsum faucibus, convallis nulla at, sollicitudin lorem. ',
  'Nulla hendrerit volutpat consectetur. ',
  'Donec euismod eros felis, sit amet tempus diam volutpat vehicula.',
  'Sed sem id magna rhoncus mattis non vulputate dolor.',
  'Quisque viverra erat arcu, sed venenatis tellus mollis a.',
];

export const onRandomMsg = (): string[] => {
  const random = Math.floor(Math.random() * base.length);
  return [base[random]];
};
