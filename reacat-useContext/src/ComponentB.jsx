import ComponentC from './ComponentC';


function ComponentB(props) {

  return (

    <>
      <div className="box">
        <h1>Component B</h1>
        <ComponentC />
      </div>
    </>

  );
}

export default ComponentB