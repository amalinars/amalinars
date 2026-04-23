import random
from datetime import datetime

def run_bot():
    # Daftar pesan biar log kamu nggak ngebosenin
    activities = [
        "Updated system logs",
        "Refactored automated scripts",
        "Improved performance metrics",
        "Cleaned up temporary files",
        "Synced metadata with server"
    ]
    
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    message = random.choice(activities)
    
    # Menulis ke file activity_log.txt (akan otomatis terbuat jika belum ada)
    with open("activity_log.txt", "a") as f:
        f.write(f"[{current_time}] - {message}\n")
    
    print(f"Berhasil update: {message}")

if __name__ == "__main__":
    run_bot()
