var Playlist = React.createClass({
  convertTime: function(ms) {
    var min = Math.floor((ms/1000/60) << 0);
    var sec = Math.floor((ms/1000) % 60);
    return min+':'+sec;
  },
  render: function() {
    var keyID = 5000;
    var queueList = this.props.queue.reduce(function(acc, track){
      acc.push(
        <tr key={keyID++}>
          <td><img src={track.album.images[2].url} width="32" className="img-circle"/></td>
          <td className="text-truncate">{track.name}</td>
          <td className="text-truncate">{this.convertTime(track.duration_ms)}</td>
          <td className="text-truncate">{track.artists[0].name}</td>
          <td className="text-truncate">{track.album.name}</td>
        </tr>
      )
      return acc
    }.bind(this), []);

    var headerStyle = {'textAlign': 'center', 'backgroundColor': '#16214d', 'margin': 0, 'padding': '10px', 'color': 'white'};

    return (
      <div className= "playlist">
        <h4 style={headerStyle}> Playlist </h4>
        <table className="table table-fixed">
          <thead>
            <tr>
              <th width="5%" data-column="picture"></th>
              <th width="30%" data-column="song">Name</th>
              <th width="10%" data-column="Duration">Duration</th>
              <th width="30%" data-column="Artist">Artist</th>
              <th width="25%" data-column="Album">Album</th>
            </tr>
          </thead>
          <tbody>
            {queueList}
          </tbody>
        </table>
      </div>
    );
  }
})
