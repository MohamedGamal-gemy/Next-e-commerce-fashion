const VariantsColor = ({ variants, setSelectedImage, setIndexVariant }) => {
  return (
    <>
      {variants?.length > 1 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Available Colors
          </h3>
          <div className="flex gap-2">
            {variants.map((variant, i) => (
              <button
                key={variant._id}
                className="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-blue-500 transition-colors"
                style={{
                  backgroundColor: variant.color.value || variant.images[0].url,
                }}
                onClick={() => {
                  setSelectedImage(variant.images[0].url);
                  setIndexVariant(i);
                }}
                aria-label={`Select ${variant.color || "variant"}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default VariantsColor;
