var Tracklist = React.createClass({
  addTrack : function(){
    this.props.addTrack(this.props.track)
  },

  render: function() {
    var keyID = 0;
    var tracks = this.props.tracks.reduce(function(acc, track) {
      acc.push(
        <Track addTrack={this.props.addTrack} key={keyID++} track={track} />
      );
      return acc;
    }.bind(this), []);
    return (
      <table className="table table-fixed">
        <tbody className="search-tbody">
          {tracks}
        </tbody>
      </table>
    )
  }
})
