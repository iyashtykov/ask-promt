(async function(codioIDE, window) {

  const systemPrompt = "You are a help assistant"
  codioIDE.coachBot.register("askPromptButton", "Ask a question", onButtonPress)
  async function onButtonPress() {
    const context = await codioIDE.coachBot.getContext()
    const input = await codioIDE.coachBot.input("Please paste the message you want me to explain!")

    let userPrompt = "{% prompt 'NO_OPEN_FILE' %}"
    if(context.files.length > 0 && context.files[0].path === "student_file.py"){
        userPrompt = "{% prompt 'ASK_PROMPT_PYTHON' %}"
    }
    if(context.files.length > 0 && context.files[0].path === "student_file.java"){
        userPrompt = "{% prompt 'ASK_PROMPT_JAVA' %}"
    }
    if(context.files.length > 0 && context.files[0].path === "student_file.cpp"){
        userPrompt = "{% prompt 'ASK_PROMPT_CPP' %}"
    }

    const result = await codioIDE.coachBot.ask({
      systemPrompt: systemPrompt,
      userPrompt: userPrompt,
      vars: {
        "GUIDE_CONTENT": context.guidesPage.content,
        "STUDENT_FILE_CONTENT": context.files[0].content,
        "INPUT": input
      }
    })

  }
})(window.codioIDE, window)
