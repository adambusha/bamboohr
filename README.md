# BambooHR Extension for Raycast

This extension connects to BambooHR to show who's out of the office today and lets you interact with BambooHR data using natural language through Raycast AI.

## Setup

1. Obtain a BambooHR API key:
   - Log in to your BambooHR account
   - Go to your user profile
   - Select "API Keys"
   - Generate a new API key

2. Install the extension in Raycast

3. Configure the extension with your BambooHR API key and company subdomain:
   - In Raycast, go to Extensions → BambooHR → Preferences
   - Enter your API Key and Subdomain (the part before `.bamboohr.com` in your BambooHR URL)

## Features

### HR Calendar
- View who's out of office today
- See the type of time off (vacation, sick leave, etc.)
- View date ranges for time off
- Copy information to clipboard with a single click

### BambooHR AI
- Ask natural language questions about who's out of office
- Search for time off information by date, person, or time period
- Examples of what you can ask:
  - "Who's out today?"
  - "Who will be out tomorrow?"
  - "Is anyone off next Monday?"
  - "When is John Smith taking time off?"
  - "Show me the upcoming vacation schedule"

## How to Use the AI Features

1. **Direct Access**:
   - Open Raycast and search for "BambooHR AI" to launch the AI command

2. **In AI Chat**:
   - Open Raycast's AI Chat and type "@BambooHR" to include the extension in your conversation
   - Ask your question after mentioning the extension

3. **Quick AI**:
   - Use Raycast's Quick AI feature and mention "@BambooHR" in your question

## Permissions

This extension requires:
- Internet access to connect to the BambooHR API
- Access to your BambooHR account via the API key you provide
- AI permission for the natural language features

## Resources

- [BambooHR API Documentation](https://documentation.bamboohr.com/reference/get-a-list-of-whos-out)
- [Raycast AI Extensions](https://manual.raycast.com/ai-extensions)