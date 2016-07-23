var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="siteTitle">Spootify</h1>
        <Controls />
      </div>
    );
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
