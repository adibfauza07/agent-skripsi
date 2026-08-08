$dir = "C:\Users\Adib\Documents\agent-skripsi"
$files = Get-ChildItem -Path $dir -Filter "*.html"

foreach ($file in $files) {
    if ($file.Name -eq "google442f9da842d26269.html") { continue }
    
    $content = Get-Content $file.FullName -Raw
    
    $content = $content -replace 'stres\.png', 'stres.webp'
    
    $regex = '(?s)<!-- Tailwind CSS -->.*?<\/style>'
    if ($content -match $regex) {
        $replacement = "<!-- Tailwind CSS (Compiled) -->`r`n    <link rel=`"stylesheet`" href=`"style.css`">"
        $content = $content -replace $regex, $replacement
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
    Write-Host "Processed $($file.Name)"
}
