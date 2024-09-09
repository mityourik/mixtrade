import video from '../../vendor/images/Top.mp4';
import styles from './Video.module.scss';
const Video: React.FC = () => {
  return (
    <video className={styles.video} src={video} muted autoPlay playsInline loop></video>
  )
}

export default Video
