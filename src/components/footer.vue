<template>
  <footer class="footer">
    
    <div class="container">
      
      <!-- Left -->
      <div class="brand">
        <h2>SOS School</h2>
        <p>Building future leaders through education and discipline.</p>
      </div>

      <!-- Links -->
      <div class="links">
        <h3>Quick Links</h3>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contacts">Contact</router-link>
        <router-link to="/staff">Staff</router-link>
      </div>

      <!-- Contact -->
      <div class="contact">
        <h3>Contact</h3>
        <p>Email: info@sos.com</p>
        <p>Phone: +250 700 000 000</p>
      </div>

    </div>

    <div class="bottom">
      <p>© 2026 SOS School. All rights reserved.</p>
    </div>

  </footer>
</template>

<style scoped>
.footer {
  background: #0f172a;
  color: white;
  padding: 50px 20px 20px;
  margin-top: 50px;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
  margin: auto;
}

.brand h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.brand p {
  color: #94a3b8;
  max-width: 250px;
}

.links,
.contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.links a {
  color: #cbd5e1;
  text-decoration: none;
  transition: 0.3s;
}

.links a:hover {
  color: #38bdf8;
}

.contact p {
  color: #cbd5e1;
}

.bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #1e293b;
  color: #94a3b8;
  font-size: 14px;
}
</style>