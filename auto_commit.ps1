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
    # Get a short diff summary for the file
    $diff = git diff --stat "$($file.File)"
    switch ($file.Status) {
        'M' { $msg = "chore($($file.File)): updated\n$diff" }
        'A' { $msg = "feat($($file.File)): added\n$diff" }
        '??' { $msg = "feat($($file.File)): new file\n$diff" }
        default { $msg = "chore($($file.File)): updated\n$diff" }
    }
    git add "$($file.File)"
    git commit -m "$msg"
}

git push