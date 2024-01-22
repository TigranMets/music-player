import React from 'react';
import playIcon from '../../assets/images/playIcon.png';
import searchIcon from '../../assets/images/searchIcon.png';
import styles from './MusicPlayListController.module.css';

const MusicPlayListController = () => {
    return <div className={styles.musicPlayListController}>
        <div className={styles.buttons}>
            <button className={styles.playerButton} onClick={() => console.log('Play All button clicked!')}>
                <img className={styles.playAllIcon} src={playIcon} alt='play icon' />
                Play All
            </button>
            <button className={styles.playerButton} onClick={() => console.log('Add All button clicked!')}>
                <span className={styles.plusIcon}>+</span>
                Add All
            </button>
        </div>
        <div>
            <div className={styles.filter}>
                <input type='search' placeholder='Filter' />
                <img className={styles.searchIcon} src={searchIcon} alt='search icon' />
            </div>
        </div>
    </div>
}

export default MusicPlayListController;