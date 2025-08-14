cd "d:\Projects\daily-running-challenge"

$files = git status --porcelain | ForEach-Object {
    $status = $_.Substring(0, 2).Trim()
    $file = $_.Substring(3).Trim()
    [PSCustomObject]@{
        Status = $status
        File   = $file
    }
}

foreach ($file in $files) {
    switch ($file.Status) {
        'M' { $msg = "chore: update $($file.File)" }
        'A' { $msg = "feat: add $($file.File)" }
        '??' { $msg = "feat: add new file $($file.File)" }
        default { $msg = "chore: update $($file.File)" }
    }
    git add "$($file.File)"
    git commit -m "$msg"
}

git push