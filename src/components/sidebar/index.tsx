import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white min-h-screen">
        <div className="p-4">
          <h1 className="text-xl font-semibold mb-4">Sidebar</h1>
          <ul>
            <li>
              <a href="#" className="block py-2 px-4">
                File Management
              </a>
              <ul>
                <li className="py-2 pl-4 hover:bg-gray-700 rounded">
                  <Link
                    href="/upload-file"
                    className="flex block p-2 hover:bg-gray-700 block ml-2 hover:bg-gray-700 rounded"
                  >
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                        width="24"
                        height="24"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z"
                            fill="#ffffff"
                          ></path>
                          <path
                            d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                            fill="#ffffff"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="ml-2">Upload File</div>
                  </Link>
                </li>
                <li className="py-2 pl-4 flex  hover:bg-gray-700 rounded">
                  <Link
                    href="/file-list"
                    className="flex block p-2 hover:bg-gray-700 block ml-2 hover:bg-gray-700 rounded"
                  >
                    <div className="mt-1 ml-1">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                        width="16"
                        height="16"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M3 1H1V3H3V1Z" fill="#ffffff"></path>
                          <path d="M3 5H1V7H3V5Z" fill="#ffffff"></path>
                          <path d="M1 9H3V11H1V9Z" fill="#ffffff"></path>
                          <path d="M3 13H1V15H3V13Z" fill="#ffffff"></path>
                          <path d="M15 1H5V3H15V1Z" fill="#ffffff"></path>
                          <path d="M15 5H5V7H15V5Z" fill="#ffffff"></path>
                          <path d="M5 9H15V11H5V9Z" fill="#ffffff"></path>
                          <path d="M15 13H5V15H15V13Z" fill="#ffffff"></path>
                        </g>
                      </svg>
                    </div>
                    <div className="ml-3">File List</div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
