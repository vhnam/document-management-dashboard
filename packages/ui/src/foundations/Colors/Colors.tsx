interface ColorProps {
  colorHex: string;
}

const Color = ({ colorHex }: ColorProps) => {
  return (
    <div className="rounded-lg overflow-auto">
      <div
        className="w-24 h-16"
        style={{
          backgroundColor: `#${colorHex}`,
        }}
      >
        &nbsp;
      </div>
      <div className="text-text-light-01 bg-default-white caption font-bold px-4 py-3 text-center">{colorHex}</div>
    </div>
  );
};

const Colors = () => {
  return (
    <section className="flex flex-col gap-8 text-text-light-01 dark:text-text-dark-03">
      <h1 className="h1">Colors</h1>

      <div className="flex flex-col gap-8">
        <h2 className="h2">Brand & Text</h2>
        <div className="flex gap-8">
          <Color colorHex="7288FA" />
          <Color colorHex="FFFFFF" />
        </div>
        <div className="flex gap-8">
          <Color colorHex="4C596A" />
          <Color colorHex="9DB2CE" />
          <Color colorHex="F2F5F9" />
          <Color colorHex="131524" />
          <Color colorHex="04050C" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="h2">Accent</h2>
        <div className="flex gap-8">
          <Color colorHex="FF7474" />
          <Color colorHex="3DD9B3" />
          <Color colorHex="F9AB72" />
          <Color colorHex="EEA8FD" />
          <Color colorHex="56B8FF" />
        </div>
      </div>
    </section>
  );
};

export default Colors;
