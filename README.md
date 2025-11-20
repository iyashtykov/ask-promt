
Save prompt examples in Codio organization in Prompt Management tab to use this extension


NO_OPEN_FILE prompt:

```
Here is the question the student is working on:
<assignment>
{{"type": "VARIABLE", "name": "GUIDE_CONTENT"}}
</assignment>

<input>
{{"type": "VARIABLE", "name": "INPUT"}}
</input>

Answer any questions the student has about this assignment without giving away solution directly.
Respond only with suggestions to help them make progress by themselves.

```

ASK_PROMPT_PYTHON prompt:

```
Here is the question the student is working on:
<assignment>
{{"type": "VARIABLE", "name": "GUIDE_CONTENT"}}
</assignment>

Here's the sample solution for the question:
<solution>
{{"type": "INSTRUCTOR_VIEW", "filepath": ".guides/secure/solution_file.py"}}
</solution>

<starter>
{{"type": "STARTER_CODE", "filepath": "student_file.py"}}
</starter>

<input>
{{"type": "VARIABLE", "name": "INPUT"}}
</input>

Answer any questions the student has about this assignment without giving away solution directly.
Respond only with suggestions to help them make progress by themselves.
```

ASK_PROMPT_JAVA prompt:

```
Here is the question the student is working on:
<assignment>
{{"type": "VARIABLE", "name": "GUIDE_CONTENT"}}
</assignment>

Here's the sample solution for the question:
<solution>
{{"type": "INSTRUCTOR_VIEW", "filepath": ".guides/secure/solution_file.java"}}
</solution>

<starter>
{{"type": "STARTER_CODE", "filepath": "student_file.java"}}
</starter>

<input>
{{"type": "VARIABLE", "name": "INPUT"}}
</input>

Answer any questions the student has about this assignment without giving away solution directly.
Respond only with suggestions to help them make progress by themselves.

```

ASK_PROMPT_CPP prompt:

```
Here is the question the student is working on:
<assignment>
{{"type": "VARIABLE", "name": "GUIDE_CONTENT"}}
</assignment>

Here's the sample solution for the question:
<solution>
{{"type": "INSTRUCTOR_VIEW", "filepath": ".guides/secure/solution_file.cpp"}}
</solution>

<starter>
{{"type": "STARTER_CODE", "filepath": "student_file.cpp"}}
</starter>

<input>
{{"type": "VARIABLE", "name": "INPUT"}}
</input>

Answer any questions the student has about this assignment without giving away solution directly.
Respond only with suggestions to help them make progress by themselves.
```