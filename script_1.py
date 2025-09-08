# Create the main HTML file
html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Celebrity Portrait Prompts Generator</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="app-container">
        <!-- Header -->
        <header class="app-header">
            <div class="header-content">
                <h1><i class="fas fa-palette"></i> Celebrity Portrait Prompts</h1>
                <p>Generate creative illustration prompts for AI art generation</p>
                <div class="theme-toggle">
                    <button id="themeToggle"><i class="fas fa-moon"></i></button>
                </div>
            </div>
        </header>

        <!-- Main App -->
        <main class="app-main">
            <div class="input-section">
                <div class="input-card">
                    <h2><i class="fas fa-star"></i> Select Celebrity</h2>
                    <div class="celebrity-input">
                        <input type="text" id="celebrityInput" placeholder="Search celebrity name..." autocomplete="off">
                        <div class="celebrity-suggestions" id="celebritySuggestions"></div>
                    </div>
                    <div class="popular-celebrities">
                        <h3>Popular Choices:</h3>
                        <div class="celebrity-chips" id="celebrityChips"></div>
                    </div>
                </div>

                <div class="input-card">
                    <h2><i class="fas fa-brush"></i> Art Style</h2>
                    <div class="style-grid" id="styleGrid"></div>
                </div>

                <div class="input-card">
                    <h2><i class="fas fa-magic"></i> Theme & Mood</h2>
                    <div class="theme-grid" id="themeGrid"></div>
                </div>

                <div class="input-card advanced-options" id="advancedOptions">
                    <h2><i class="fas fa-cog"></i> Advanced Options</h2>
                    <div class="option-row">
                        <label for="lightingSelect">Lighting:</label>
                        <select id="lightingSelect">
                            <option value="">Auto</option>
                            <option value="cinematic lighting">Cinematic</option>
                            <option value="golden hour lighting">Golden Hour</option>
                            <option value="neon rim-light">Neon Rim-light</option>
                            <option value="soft studio lighting">Soft Studio</option>
                            <option value="dramatic side lighting">Dramatic Side</option>
                        </select>
                    </div>
                    <div class="option-row">
                        <label for="clothingSelect">Clothing Style:</label>
                        <select id="clothingSelect">
                            <option value="">Auto</option>
                            <option value="modern elegant attire">Modern Elegant</option>
                            <option value="traditional ethnic wear">Traditional Ethnic</option>
                            <option value="futuristic fashion">Futuristic</option>
                            <option value="royal costume">Royal Costume</option>
                            <option value="casual contemporary">Casual Contemporary</option>
                        </select>
                    </div>
                </div>

                <div class="generate-section">
                    <button class="generate-btn" id="generateBtn">
                        <i class="fas fa-magic"></i> Generate Prompts
                    </button>
                    <button class="advanced-toggle" id="advancedToggle">
                        <i class="fas fa-cog"></i> Advanced Options
                    </button>
                </div>
            </div>

            <div class="output-section">
                <div class="output-header">
                    <h2><i class="fas fa-file-alt"></i> Generated Prompts</h2>
                    <div class="output-controls">
                        <button id="clearBtn"><i class="fas fa-trash"></i> Clear</button>
                        <button id="saveAllBtn"><i class="fas fa-download"></i> Save All</button>
                    </div>
                </div>
                <div class="prompts-container" id="promptsContainer">
                    <div class="welcome-message">
                        <i class="fas fa-paint-brush"></i>
                        <h3>Welcome to Celebrity Portrait Prompts!</h3>
                        <p>Select a celebrity, choose your art style and theme, then click "Generate Prompts" to create professional illustration prompts for AI art generation.</p>
                        <div class="example-prompts">
                            <h4>Example Output:</h4>
                            <div class="example-prompt">
                                <code>Illustration portrait of Deepika Padukone, created in digital painting style, with cinematic soft lighting, wearing a modern Indian fusion saree with futuristic jewelry, set in a cyberpunk-inspired Mumbai nightscape, emphasizing elegance and futuristic charm. Rendered in the style of Artgerm and Loish, with sharp focus, ultra-detailed brushstrokes, and vibrant neon highlights.</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Loading Overlay -->
        <div class="loading-overlay" id="loadingOverlay">
            <div class="loading-content">
                <i class="fas fa-palette fa-spin"></i>
                <p>Generating creative prompts...</p>
            </div>
        </div>

        <!-- Saved Prompts Modal -->
        <div class="modal" id="savedPromptsModal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3><i class="fas fa-bookmark"></i> Saved Prompts</h3>
                    <button class="close-modal" id="closeModal"><i class="fas fa-times"></i></button>
                </div>
                <div class="modal-body" id="savedPromptsList"></div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>'''

# Save HTML file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("✅ index.html created successfully")