import "./Modal.css";

export function Modal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Spiral Galaxy</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <p>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos
          ipsa aliquam mollitia ducimus inventore nesciunt incidunt, veniam
          illo, voluptas quas atque repellendus distinctio quisquam? Quam
          assumenda nesciunt atque quibusdam. Dicta ullam esse sed error
          quisquam veritatis odio architecto similique id repellat atque
          blanditiis nostrum, ipsam dignissimos ex aliquam corrupti at, deleniti
          molestias. Magnam eveniet temporibus aliquid? Itaque, deleniti magni!
          Itaque possimus quod, id vitae dicta minima debitis dolore voluptatem,
          nisi expedita molestias deserunt quibusdam vel assumenda aspernatur
          optio delectus quasi, doloremque explicabo cumque accusantium nulla.
          Aspernatur placeat veniam atque?
        </p>
      </div>
    </div>
  );
}
