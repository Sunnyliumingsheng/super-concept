function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "en-US"   // 朗读英文
  window.speechSynthesis.speak(utterance)
}

// 获取选中内容并朗读
document.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString().trim()
  if (selection) {
    speakText(selection)
  }
})
