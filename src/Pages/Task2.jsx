function App() {
  return (
    <div className="p-16 ">
      <ol className="list-disc p-4 text-2xl">
        <li>Make the profile image rounded</li>
        <li>Round the edges of the card</li>
        <li>Add a shadow to the card</li>
        <li>
          Replicate the position of the name and the image as shown in the card
          under assets
        </li>
      </ol>

      <div className="m-10">
        
          <header className="p-6">
            
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          <br />
            <p className="text-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem”
            </p>
          </header>

          <footer className="px-6 py-4 space-x-4 text-white bg-gradient-to-br from-blue-700 to-blue-500 rounded-md">
            <div className="flex gap-4  ">
            <img
              className="w-10 h-10 rounded-full ring-2 ring-white mt-3     "
              loading="lazy"
              src="https://picsum.photos/500"
              alt="Lars Klopstra"
              width="180"
              height="180"
            />
            <div>
              <p className="text-lg font-bold">John Doe</p>
              <a href="" rel="noopener" className="text-sm text-blue-200">
                Founder of John Doe Inc.
              </a>
              </div>
            </div>
          </footer>
        
      </div>
    </div>
  );
}

export default App;
