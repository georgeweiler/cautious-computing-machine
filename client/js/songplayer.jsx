var Songplayer = React.createClass({
  componentDidUpdate: function(prevProps) {
    var audio = document.querySelector('audio') || null;
    if (prevProps.song !== this.props.song) {
      audio.load();
    }
    if (audio) {
      audio.onended = function() {
        console.log('got here')
        this.props.handleSkip();
      }.bind(this);
    }
  },
  render: function() {
    var songInfo = this.props.song ? <SongInfo song = {this.props.song} /> : null;
    var songUrl = this.props.song ? this.props.song.preview_url : '';
    var audioStyle = {'textAlign': 'center'};
    var audioTitle = {'textAlign': 'center', 'height': '18px'};
    var songName = this.props.song ? this.props.song.name : '';
    return (
      <div className="playerWrapper row">
        <div className="col-md-3">{songInfo}</div>
        <div style={audioStyle} className="col-md-6">
          <div className="row">
            <h4>{songName}</h4>
          </div>
          <div className="row">
            <audio controls autoPlay>
              <source src={songUrl} type="audio/mpeg"></source>
            </audio>
          </div>
        </div>
      </div>
    )
  }
})
