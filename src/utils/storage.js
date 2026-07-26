export class Storage {
  static getProgress(stepId) {
    const progress = JSON.parse(localStorage.getItem('umrah_progress') || '{}');
    return !!progress[stepId];
  }

  static toggleProgress(stepId, isCompleted) {
    const progress = JSON.parse(localStorage.getItem('umrah_progress') || '{}');
    progress[stepId] = isCompleted;
    localStorage.setItem('umrah_progress', JSON.stringify(progress));
    
    window.dispatchEvent(new CustomEvent('progressChanged', { 
      detail: { stepId, isCompleted } 
    }));
  }

  static clearProgress() {
    localStorage.removeItem('umrah_progress');
    window.dispatchEvent(new CustomEvent('progressCleared'));
  }
}
