# Deployment Configuration

## Server Information
**Server IP**: `72.60.226.252`

---

## DNS Records for 5610lobellodr.com
(Updated based on your screenshots)

| Type  | Name (Host) | Value           | TTL       | Proxy Status |
| :---  | :---        | :---            | :---      | :--- |
| **A** | `@`         | `72.60.226.252` | Automatic | **Proxied** (Orange Cloud) |
| **CNAME** | `www`   | `5610lobellodr.com` | Automatic | **Proxied** (Orange Cloud) |

---

## Dokploy Configuration Steps (CRITICAL UPDATES)

To fix the connection between Dokploy and your Vite app:

### 1. General Tab (Fixing the Port & Host)
Vite runs on port 4173 by default and blocks external access. You **Must** override this.
1. Go to the **General** tab in Dokploy.
2. Find **Start Command**.
3. Change it to: 
   `npm run preview -- --port 3000 --host`
4. Click **Save** and **Redeploy**.

### 2. Cloudflare SSL Mode
Since you have the "Orange Cloud" enabled:
1. Log into **Cloudflare**.
2. Go to **SSL/TLS**.
3. Set the mode to **Full** or **Full (Strict)**.
   *(If set to "Flexible", it will cause a redirect loop).*

### 3. Verify Domain Settings
Your screenshot shows Port `3000`.
- If you used the command in Step 1 (`--port 3000`), leave the Domain Port at `3000`.
- Ensure **"Behind Cloudflare"** is checked (as seen in your screenshot).
