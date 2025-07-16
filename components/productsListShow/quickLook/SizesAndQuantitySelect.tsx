const SizesAndQuantitySelect = ({
  setSizeSelected,
  setQuantityAvailability,
  sizes,
  quantityAvailability,
  sizeSelected,
}) => {
  return (
    <div className="flex gap-3 items-center">
      <select
        className="bg-slate-800 p-2 rounded-md"
        onChange={(e) => {
          setSizeSelected(e.target.value);
          const selectedQuantity = e.target.selectedOptions[0].dataset.qun;
          setQuantityAvailability(Number(selectedQuantity));
        }}
      >
        {sizes.map((s) => (
          <option value={s.size} data-qun={s.quantity} key={s._id}>
            {s.size}
          </option>
        ))}
      </select>
      <select className="bg-slate-800 p-2 rounded-md" disabled={!sizeSelected}>
        {Array.from({ length: quantityAvailability }).map((q, i) => (
          <option value={i + 1} key={i} disabled={!sizeSelected}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizesAndQuantitySelect;
