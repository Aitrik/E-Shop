import { Dialog, Transition } from '@headlessui/react';
import React from 'react'

export default function MobileFilter() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <>
    {/* Drawer for mobile devices */}
    <Transition show={isSidebarOpen} as={React.Fragment}>
        <Dialog
          open={isSidebarOpen}
          onClose={toggleSidebar}
          className="relative z-50"
        >
          <Transition.Child
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Filters
                          </Dialog.Title>
                          <button
                            type="button"
                            className="ml-3 flex h-7 items-center text-gray-400 hover:text-gray-500"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        {/* Filters content */}
                        <ul className="list-none">
                          <li className="mb-4">
                            <h3 className="font-semibold">Categories</h3>
                            <ul className="list-none">
                              <li>
                                <label>
                                  <input type="checkbox" /> Sneakers
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" /> Boots
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" /> Sandals
                                </label>
                              </li>
                            </ul>
                          </li>
                          <li className="mb-4">
                            <h3 className="font-semibold">Price</h3>
                            <ul className="list-none">
                              <li>
                                <label>
                                  <input type="checkbox" /> $20
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" /> $50
                                </label>
                              </li>
                              <li>
                                <label>
                                  <input type="checkbox" /> $100
                                </label>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
