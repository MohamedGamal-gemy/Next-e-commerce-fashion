const SizesAndstockSelect = ({
  setSizeSelected,
  setstockAvailability,
  sizes,
  stockAvailability,
  sizeSelected,
}) => {
  return (
    <div className="flex gap-3 items-center">
      <select
        className="bg-slate-800 p-2 rounded-md"
        onChange={(e) => {
          setSizeSelected(e.target.value);
          const selectedstock = e.target.selectedOptions[0].dataset.qun;
          setstockAvailability(Number(selectedstock));
        }}
      >
        {sizes.map((s) => (
          <option value={s.size} data-qun={s.stock} key={s._id}>
            {s.size}
          </option>
        ))}
      </select>
      <select className="bg-slate-800 p-2 rounded-md" disabled={!sizeSelected}>
        {Array.from({ length: stockAvailability }).map((q, i) => (
          <option value={i + 1} key={i} disabled={!sizeSelected}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizesAndstockSelect;
