export const StackedList: React.FC = () => (
  <div>
    <div className="flow-root mt-6">
      <ul className="-my-5 divide-y divide-gray-200">
        <li className="py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="https://wiki.eveuniversity.org/images/6/66/Logo_faction_the_blood_raider_covenant.png"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate text-md text-gray-50">Delve {'>'} LSC-4P {'>'} UEXO-Z</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
              >
                View
              </a>
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="https://wiki.eveuniversity.org/images/6/66/Logo_faction_the_blood_raider_covenant.png"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
            <p className="font-medium truncate text-md text-gray-50">Delve {'>'} LSC-4P {'>'} GY6A-L</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
              >
                View
              </a>
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="https://wiki.eveuniversity.org/images/6/66/Logo_faction_the_blood_raider_covenant.png"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
            <p className="font-medium truncate text-md text-gray-50">Delve {'>'} LSC-4P {'>'} 9O-8W1</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
              >
                View
              </a>
            </div>
          </div>
        </li>

        <li className="py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="https://wiki.eveuniversity.org/images/6/66/Logo_faction_the_blood_raider_covenant.png"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
            <p className="font-medium truncate text-md text-gray-50">Delve {'>'} LSC-4P {'>'} 8F-TK3</p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
              >
                View
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="mt-6">
      <a
        href="#"
        className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
      >
        View all
      </a>
    </div>
  </div>
)

export default StackedList
