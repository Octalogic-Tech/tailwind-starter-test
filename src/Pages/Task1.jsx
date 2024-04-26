function App() {
  return (
    <div className="p-16">
      <ol className="list-disc p-4 text-2xl">
        <li>
          Write CSS such that the image below is black and white by default and
          on hover, it turns colored.
        </li>
        <li>On hover change the cursor to a pointer</li>
      </ol>

      <div className="m-4">
        <div className="aspect-w-1 aspect-h-1 w-1/2 h-1/2 overflow-hidden grayscale hover:grayscale-0">
          <img
            src="https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g"
            alt="Descriptive Alt Text"
            className="object-cover w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
