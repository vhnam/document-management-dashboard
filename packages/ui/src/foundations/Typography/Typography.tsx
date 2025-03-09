const Typography = () => {
  return (
    <section className="flex flex-col gap-8 text-text-light-01 dark:text-text-dark-03">
      <h1 className="h1">Typography</h1>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Heading</h2>
        <div className="flex flex-col gap-2">
          <p className="h1">Heading 1</p>
          <p className="h2">Heading 2</p>
          <p className="h3">Heading 3</p>
          <p className="h4">Heading 4</p>
          <p className="h5">Heading 5</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Subtitle</h2>
        <div className="flex flex-col gap-2">
          <p className="subtitle1">Subtitle 1</p>
          <p className="subtitle2">Subtitle 2</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Body</h2>
        <div className="flex flex-col gap-2">
          <p className="body1">Body 1</p>
          <p className="body2">Body 2</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="h2">Misc</h2>
        <div className="flex flex-col gap-2">
          <p className="button">Button</p>
          <p className="capture">Capture</p>
          <p className="overline">Overline</p>
        </div>
      </div>
    </section>
  );
};

export default Typography;
