import { Checkbox } from "@/components/ui/checkbox";

const ColorFilter = ({
  colors,
  // , selectedColors,
  // onColorChange
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white">Colors</h3>
      </div>

      {colors.length === 0 ? (
        <div className="text-center py-4">
          <div className="w-12 h-12 mx-auto mb-3 bg-slate-700/50 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <p className="text-slate-400 text-sm">No colors available</p>
        </div>
      ) : (
        <div className="space-y-2">
          {colors.length > 7 &&
            colors.slice(0, 7).map((color) => (
              <div
                key={color._id}
                className="group flex gap-2 w-full items-center hover:bg-gray-600/30 border 
               hover:border-gray-600  duration-200 p-2 rounded-md border-transparent cursor-pointer "
              >
                <Checkbox
                  className="!bg-slate-800 !text-white border !w-5 !h-5 flex flex-col items-center justify-center
                !border-slate-600 "
                  id={`color-${color._id}`}
                  // checked={selectedColors.includes(color._id)}
                  // onCheckedChange={() => onColorChange(color._id)}
                  // className="sr-only"
                />
                <label htmlFor={`color-${color._id}`}>{color.color.name}</label>

                {/* Color Swatch */}

                {/* {selectedColors.includes(color._id) && (
                <div className="ml-auto">
                  <div
                    className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 
                  rounded-full"
                  ></div>
                </div>
              )} */}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ColorFilter;
