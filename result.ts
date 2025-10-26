// Creating Result type Alias
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

function checkPassOrFail(marks: number): Result<string, string> {
  if (marks >= 33) {
    return { ok: true, value: "Congratulations, you are Passed!" };
  } else {
    return { ok: false, error: "Fail, better luck next time!" };
  }
}

// Pass result check
const result1 = checkPassOrFail(75);
if (result1.ok) console.log(result1.value);
else console.log((result1 as { ok: false; error: string }).error);

// Fail result check
const result2 = checkPassOrFail(21);
if (result2.ok) console.log(result2.value);
else console.log((result2 as { ok: false; error: string }).error);
