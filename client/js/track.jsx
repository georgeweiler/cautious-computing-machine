var Track = React.createClass({
  addTrack : function(){
    this.props.addTrack(this.props.track)
  },

  render: function() {
    var track = this.props.track;
    return (
      <tr onClick={this.addTrack}>
        <td><img src={track.album.images[2].url} width="32" className="img-circle"/></td>
        <td className="text-truncate">{track.name}</td>
      </tr>
    )
  }
})
