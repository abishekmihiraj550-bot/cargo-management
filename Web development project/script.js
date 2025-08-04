// Show the specified view and hide others
function showView(viewId) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.remove('active');
  });
  document.getElementById(viewId).classList.add('active');
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`nav a[onclick="showView('${viewId}')"]`).classList.add('active');
}

// Track shipment function
function trackShipment() {
  const trackingNumber = document.getElementById('trackingNumber').value.trim();
  if (trackingNumber) {
    document.getElementById('trackingResult').style.display = 'block';
    document.getElementById('resultTrackingNo').textContent = trackingNumber;
  } else {
    alert('Please enter a tracking number');
  }
}

// Form submission handler
document.getElementById('cargoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const shipper = document.getElementById('shipper').value;
  const consignee = document.getElementById('consignee').value;
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;

  console.log('New shipment:', {
    shipper,
    consignee,
    origin,
    destination,
    weight: document.getElementById('weight').value,
    dimensions: document.getElementById('dimensions').value,
    shipmentType: document.getElementById('shipmentType').value,
    priority: document.getElementById('priority').value,
    description: document.getElementById('description').value
  });

  alert('Shipment created successfully!');
  this.reset();
  showView('dashboard');
});

document.addEventListener('DOMContentLoaded', function() {
  showView('dashboard');
});

