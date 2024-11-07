type PointerProps = {
  position: { x: number; y: number };
};

const index = ({ position }: PointerProps) => {
  return (
    <div
      className="pointer"
      style={{
        top: -10,
        left: -10,
        width: 20,
        height: 20,
        opacity: 0.4,
        borderRadius: "50%",
        position: "absolute",
        backgroundColor: "#e67e22",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default index;
