export default function NumberButtons({ increasingNumber, onClick }) {
  const numbers = Array(increasingNumber).fill().map((_, i) => i + 1);

  const handleClickButton = (number) => {
    onClick(number);
  };

  return (
    <div>
      {numbers.map((number) => (
        <button type="button" key={number} onClick={() => handleClickButton(number)}>{number}</button>
      ))}
    </div>
  );
}
